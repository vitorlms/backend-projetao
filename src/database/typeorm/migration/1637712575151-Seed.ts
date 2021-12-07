import {MigrationInterface, QueryRunner} from "typeorm";

export class Seed1637712575151 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`insert into "profile" ("category", "id") values ('Historiador', 1);
        insert into "profile" ("category", "id") values ('Folclórico', 2);`)

        await queryRunner.query(`insert into "itinerary" ("description", "id", "imageUrl", "profileId", "title") 
        values ('Um roteiro histórico da cidade do Recife!', 1, 'https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2018/01/03/736682/20180103085248486138e.jpg', 1, 'Roteiro Histórico do Recife');
        insert into "itinerary" ("description", "id", "imageUrl", "profileId", "title") 
        values ('Um roteiro sobre algumas lendas urbanas da cidade mais assombrada em linha reta do Brasil!', 2, 'https://www.portodorecife.pe.gov.br/images/galeria/noticias/cruz.jpg', 2, 'A cidade mais assombrada do Brasil');`);

        await queryRunner.query(`insert into "interest_point_itinerary_order" ("itineraryId", "order") values (1, 1);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (1, 2);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (1, 3);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (1, 4);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (1, 5);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (1, 6);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (1, 7);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (2, 1);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (2, 2);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (2, 3);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (2, 4);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (2, 5);
        insert into "interest_point_itinerary_order" ("itineraryId", "order") values (2, 6);`)

        await queryRunner.query(`INSERT INTO public."user" (id, email, password, name, "profilePicture", experience, historian, "profileId") VALUES (3, 'teste@email.com', 'senha123', null, null, 0, false, null);
        INSERT INTO public."user" (id, email, password, name, "profilePicture", experience, historian, "profileId") VALUES (4, 'milton@email.com', 'senha123', 'José', 'milton.jpg', 0, false, null);`);
        }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.query(`DELETE FROM "interest_point_itinerary_order"`);
        await queryRunner.query(`DELETE FROM "itinerary"`);
        await queryRunner.query(`DELETE FROM "profile"`);
        await queryRunner.query(`DELETE FROM "user"`);
        }

}
