import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Subscription {
    
   @PrimaryGeneratedColumn()
   id: number

   @Column({ name: 'subscription_id' , nullable: true })
   subscription: number


   @Column({ name: 'subscriber_id' , nullable: true })
   subscriber: number
}
