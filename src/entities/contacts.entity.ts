import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import User from "./users.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45 })
  email: string;

  @Column({ type: "varchar", length: 45 })
  phone: string;

  @CreateDateColumn({ type: "date" })
  registerDate: Date | string;

  @ManyToOne(() => User, (users) => users.contacts, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user: User;
}

export default Contact;
