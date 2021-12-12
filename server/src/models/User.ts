import {Profile, User} from 'nexus-prisma';

import {NexusGenRootTypes} from '../generated/nexus';
import {PrismaClient} from '@prisma/client';
import {assert} from '../utils/assert';
import {objectType} from 'nexus';

export const ProfileModel = objectType({
  name: 'Profile',
  definition(t) {
    t.field(Profile.socialId);
    t.auth('authType');
    t.field(Profile.user);
  },
});

export const UserModel = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.field(User.id);
    t.field(User.email);
    t.field(User.name);
    t.field(User.nickname);
    t.field(User.thumbURL);
    t.field(User.photoURL);
    t.field(User.birthday);
    t.field(User.gender);
    t.field(User.phone);
    t.field(User.statusMessage);
    t.field(User.verified);
    t.field(User.lastSignedIn);
    t.field(User.isOnline);
    t.field(User.createdAt);
    t.field(User.updatedAt);
    t.field(User.deletedAt);
    t.field(User.profile);
    t.list.field(User.notifications);

    t.boolean('hasBlocked', {
      description:
        'Check if the user is blocked by the user who have signed in.',

      resolve: async ({id}, args, {userId, prisma}) => {
        assert(userId, 'Not authorized.');

        const blockedUser = await prisma.blockedUser.findFirst({
          where: {userId, blockedUserId: id},
        });

        return !!blockedUser;
      },
    });

    t.boolean('isFriend', {
      description: 'This user is a friend of the authenticated user.',
      resolve: async ({id}, _args, {userId, prisma}) => {
        assert(userId, 'Not authorized.');

        const friendQueryResult = await prisma.friend.findUnique({
          where: {
            userId_friendId: {
              userId,
              friendId: id,
            },
          },
        });

        return !!friendQueryResult;
      },
    });
  },
});

export const resetPassword = (
  prisma: PrismaClient,
  email: string,
  password: string,
): Promise<NexusGenRootTypes['User']> => {
  return prisma.user.update({
    where: {email},
    data: {password},
  });
};

export const verifyEmail = (
  prisma: PrismaClient,
  email: string,
): Promise<NexusGenRootTypes['User']> => {
  return prisma.user.update({
    where: {email},
    data: {
      verified: true,
    },
  });
};
