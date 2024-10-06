import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
@Entity()
export class Map {

    @PrimaryGeneratedColumn({ name: 'map_id'})
    id: number

    @Column({ name: 'coordinate' , nullable: true })
    coordinate: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date

}


