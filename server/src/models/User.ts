import {Profile as ProfileNexus, User as UserNexus} from 'nexus-prisma';

import {NexusGenRootTypes} from '../generated/nexus';
import {PrismaClient} from '@prisma/client';
import {assert} from '../utils/assert';
import {objectType} from 'nexus';

export const Profile = objectType({
  name: ProfileNexus.$name,
  description: ProfileNexus.$description,
  definition(t) {
    t.field(ProfileNexus.socialId);
    t.auth('authType');
    t.field(ProfileNexus.user);
  },
});

export const User = objectType({
  name: UserNexus.$name,
  description: UserNexus.$description,
  definition(t) {
    t.field(UserNexus.id);
    t.field(UserNexus.email);
    t.field(UserNexus.name);
    t.field(UserNexus.nickname);
    t.field(UserNexus.thumbURL);
    t.field(UserNexus.photoURL);
    t.field(UserNexus.birthday);
    t.field(UserNexus.gender);
    t.field(UserNexus.phone);
    t.field(UserNexus.statusMessage);
    t.field(UserNexus.verified);
    t.field(UserNexus.lastSignedIn);
    t.field(UserNexus.isOnline);
    t.field(UserNexus.createdAt);
    t.field(UserNexus.updatedAt);
    t.field(UserNexus.deletedAt);
    t.field(UserNexus.profile);
    t.list.field(UserNexus.notifications);

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
