create TABLE applications(
    id SERIAL,
    authName VARCHAR(100),
    authMail VARCHAR(100),
    paperTitle VARCHAR(300),
    abstract VARCHAR(1000),
    paperID VARCHAR(100) PRIMARY KEY,
    filePath VARCHAR(200),
    appliedOn VARCHAR(200) default CURRENT_DATE,
    appStatus VARCHAR(100)
);


create TABLE publishedArticles(
    id SERIAL,
    authName VARCHAR(100),
    authMail VARCHAR(100),
    paperTitle VARCHAR(300),
    abstract VARCHAR(1000),
    paperID VARCHAR(100) PRIMARY KEY,
    filePath VARCHAR(200),
    publishedOn VARCHAR(200) default CURRENT_DATE,
    appStatus VARCHAR(100),
    issue VARCHAR(100),
    volume VARCHAR(100)
);



create TABLE editors(
    id SERIAL,
    editorName VARCHAR(100),
    editorMail VARCHAR(100) PRIMARY KEY,
    editorPassword VARCHAR(300),
    phoneNumber VARCHAR(1000),
);