import { Collection } from "src/collection/entities/collection.entity";
import { Note } from "src/notes/entities/note.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    email: string
    @Column({ nullable: true })
    username: string
    @Column()
    password: string
    @Column({ nullable: true })
    name: string
    @Column({ name: 'type_profile' , nullable: true })
    type: string
    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updateAt: Date
    
    //Связи
    // заметка к пользователю
    @OneToMany(() => Note, (note) => note.user ,{
        onDelete:'CASCADE',
    })
    
    notes: Note[]
    // заметка к колекции
    @OneToMany( () => Collection, (collection) => collection.user  , { 
        onDelete: 'CASCADE' }) //Связь один ко многим
    collections: Collection[]
}
