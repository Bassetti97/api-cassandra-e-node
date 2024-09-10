### API + Cassandra

## Script que foi usado para criar o banco: 

 # Criando a kayspace
 cqlsh:pop_divas> CREATE KEYSPACE mulheres_tech WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

 # Comando para "usar" a keyspace
 cqlsh:pop_divas> USE mulheres_tech;

 # Criando tabela dentro da keyspace
 cqlsh:mulheres_tech> create table profissionais (id UUID primary key, name TEXT, birth INT, country TEXT, area TEXT, contribuition TEXT); 

 # Inserindo dados dentro da tabela
 cqlsh:mulheres_tech> INSERT INTO profissionais (id, name, birth, country, area, contribuition) 
                      VALUES (uuid(), 'Ada Lovelace', 1815, 'Reino Unido', 'Matemática, Programação', 'Primeira programadora de computadores' );

 cqlsh:mulheres_tech> INSERT INTO profissionais (id, name, birth, country, area, contribuition) 
                      VALUES (uuid(), 'Grace Hopper', 1906, 'Estados Unidos', 'Ciência da Computação, Linguagens de Programação', 'Criadora do primeiro compilador e da linguagem COBOL' );

 cqlsh:mulheres_tech> INSERT INTO profissionais (id, name, birth, country, area, contribuition) 
                      VALUES (uuid(), 'Hedy Lamarr', 1914, 'Áustria', 'Inventora, Comunicações sem fio', 'Co-inventora de uma técnica que serviu de base para Wi-Fi e Bluetooth');

 cqlsh:mulheres_tech> INSERT INTO profissionais (id, name, birth, country, area, contribuition) 
                      VALUES (uuid(), 'Radia Perlman', 1951, 'Estados Unidos', 'Redes de Computadores', 'Criadora do Spanning Tree Protocol (STP), fundamental para o funcionamento da Internet');

 cqlsh:mulheres_tech> INSERT INTO profissionais (id, name, birth, country, area, contribuition) 
                      VALUES (uuid(), 'Katherine Johnson', 1918, 'Estados Unidos', 'Matemática, Ciência da Computação', 'Cálculos cruciais para missões espaciais da NASA');

