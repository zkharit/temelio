TRUNCATE TABLE foundation;
TRUNCATE TABLE nonprofit;

INSERT INTO foundation(email)
VALUES
	('zane@gmail.com'),
    ('abcfoundation@aol.com'),
    ('greatfoundation@hotmail.com'),
    ('bob@amazon.com'),
    ('magicfoundation@gmail.com'),
    ('funfoundation@aol.com'),
    ('tony@hotmail.com'),
    ('candace@amazon.com'),
    ('charitablefoundation@gmail.com');

INSERT INTO nonprofit(email, name, address)
VALUES
    ('ruthwick@gmail.com', 'ruthwick non-profit', '123 ruthwick ave'),
    ('abcnonprofit@aol.com', 'abcnonprofit non-profit', '123 abcnonprofit ave'),
    ('greatnonprofit@hotmail.com', 'greatnonprofit non-profit', '123 greatnonprofit ave'),
    ('sally@amazon.com', 'sally non-profit', '123 sally ave'),
    ('magicnonprofit@gmail.com', 'magicnonprofit non-profit', '123 magicnonprofit ave'),
    ('funnonprofit@aol.com', 'funnonprofit non-profit', '123 funnonprofit ave'),
    ('mark@hotmail.com', 'mark non-profit', '123 mark ave'),
    ('sharon@amazon.com', 'sharon non-profit', '123 sharon ave'),
    ('charitablenonprofit@gmail.com', 'charitablenonprofit non-profit', '123 charitablenonprofit ave');