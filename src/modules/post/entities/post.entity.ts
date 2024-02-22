import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { User } from '../../users/user.entity';

@Table
export class Post extends Model<Post> {
  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  title: string;
  @Column({
    type: DataTypes.TEXT,
    allowNull: false,
  })
  body: string;
  @ForeignKey(() => User)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  userId: number;
  @BelongsTo(() => User)
  user: User;
}
