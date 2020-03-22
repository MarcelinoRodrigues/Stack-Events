create database eventos;
use eventos;
CREATE TABLE evento(
    id int(4)AUTO_INCREMENT,
    nomeEvento varchar(120)not null,
    data datetime,
    descricao varchar(120)not null,
    arquivo varchar(40),
    PRIMARY KEY(id)
);