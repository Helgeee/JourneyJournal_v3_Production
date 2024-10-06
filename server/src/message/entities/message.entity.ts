import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"


@Entity()
export class Message {


    @PrimaryGeneratedColumn({ name: 'message_id'})
    id: number

    @Column ({ name: 'sender_id ' , nullable: true })
    sender: string

    @Column({ name: 'receiver_id ' , nullable: true })
    receiver: string

    @Column({ name: 'message_text' , nullable: true })
    text: string

    @Column({ name: 'read' , nullable: true })
    status: string

    @CreateDateColumn ()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date

}