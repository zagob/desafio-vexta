import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateClientes1612652193725 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clientes",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "cnpj-cpf",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "name-fantasia",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "endereco",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "numero",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "bairro",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "complemento",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "municipio_id",
            type: "uuid",
          },
          {
            name: "telefone",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "site",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "celular",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "municipioClientes",
            referencedTableName: "municipios",
            referencedColumnNames: ["id"],
            columnNames: ["municipio_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clientes");
  }
}
