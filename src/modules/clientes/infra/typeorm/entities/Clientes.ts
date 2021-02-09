import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import Municipio from "../../../../municipios/infra/typeorm/entities/Municipio";

@Entity("clientes")
class Appointment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  cnpj_cpf: string;

  @Column()
  name: string;

  @Column()
  name_fantasia: string;

  @Column()
  endereco: string;

  @Column()
  numero: string;

  @Column()
  bairro: string;

  @Column()
  complemento: string;

  @ManyToOne(() => Municipio)
  @JoinColumn({ name: "municipio_id" })
  municipio: Municipio;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column()
  site: string;

  @Column()
  celular: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointment;
