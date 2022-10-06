require('dotenv').config()

const {CONNECTION_STRING} = process.env;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists artist_card;
        drop table if exists quotes;
        
        

        create table quotes (
            quote_id serial primary key,
            quote varchar(100),
            artist_id integer references artist(artist_id)
        );
        
        create table artist_card (
            artist_id serial primary key, 
            name varchar(30),  
            quote_id integer references quotes(quote_id),
            image_url varchar(100) 
        );

       
        insert into quotes(quote, artist_id)
        values ('If the game shakes me or break me, I hope it makes me a better man.', 1),
        ('If every pork chop was perfect we wouldn't have hot dogs', 2),
        ('A man who stands for nothing will fall for anything.', 3),
        ('If the game shakes me or breaks me, I hope it makes me a better man.', 1),
        ('Now I'm in the limelight 'cause I rhyme tight.', 1),
        ('Now, remember, Steven, if you run into any trouble out there, you can always bail. There's never any shame in bailing.', 2),
        ('I may be losin' my hair, but the magic's still there.', 2),
        ('Be peaceful, be courteous, obey the law, respect everyone; but if someone puts his hand on you, send him to the cemetery.', 3),
        ('Any time you beg another man to set you free, you will never be free. Freedom is something that you have to do for yourselves.', 3),
        ('I have no mercy or compassion in me for a society that will crush people, and then penalize them for not being able to stand up under the weight.', 3),
        ('There is no better than adversity. Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance next time.', 3);
        
        insert into artist_card (name, quote_id, image_url)
        values('Notorious B.I.G', 1, 'https://miro.medium.com/max/750/1*YGdpRUmRKtYoQujQSQtw_w@2x.jpeg' ),
        ('Greg Universe', 2, 'https://www.denofgeek.com/wp-content/uploads/2020/03/Steven-Universe-Future-Greg-Universe.png?resize=768%2C432'),
        ('Malcolm X', 3, 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_37/3410610/200908-malcolm-x-ew-438p-3410610.jpg');

        

        



        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err)

        )}}