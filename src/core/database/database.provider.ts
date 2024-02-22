import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, RELEASE, PRODUCTION } from '../../constants';
import { databaseConfig } from './database.config';
import { User } from '../../modules/users/user.entity';
import { Post } from '../../modules/post/entities/post.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT.toUpperCase():
          config = databaseConfig.development;
          break;
        case RELEASE.toUpperCase():
          config = databaseConfig.release;
          break;
        case PRODUCTION.toUpperCase():
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Post]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
