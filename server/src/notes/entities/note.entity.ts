
import { Collection } from "src/collection/entities/collection.entity";


import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn,  Entity,     JoinColumn,     ManyToOne,        PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class Note {

    @PrimaryGeneratedColumn({ name: 'note_id'})
    id: number

    @Column({ name: 'img_note' , nullable: true })
    img: string

    @Column( { nullable: true } )
    title: string

    @Column({   nullable: true })
    coordinate: string

    @Column({  nullable: true })
    text: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date


    //связи многие к одному пользователю
    
    @ManyToOne(() => User , (user) => user.notes )
    @JoinColumn({ name: 'user_id'})
    user: User

    // связи  многие к одному коллекции

    @ManyToOne(() => Collection , (collection) => collection.notes)
    @JoinColumn({ name: 'collection_id'})
    collections: Collection

   
     // связь один к одному координаты

    // @OneToOne(() => Map, (map) => map.note  ,{
    //     onDelete:'CASCADE',
    // })
    // @JoinColumn({ name: 'coordinate'  })
    // map: Map
}
