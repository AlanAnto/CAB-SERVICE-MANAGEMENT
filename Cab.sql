create database Cab ;
use Cab;

create table CAB(
NO  int primary key auto_increment,
NAME varchar(150) not null,
DESCRIPTION varchar(150) not null,
SEAT_NO int not null
);

create table CUSTOMER(
ID int primary key auto_increment,
NAME varchar(50) not null,
USERNAME varchar(50) not null,
EMAIL varchar(50) not null,
PASSWORD varchar(50) not null,
PH int not null,
DOB date not null);

create table DRIVER(
ID int primary key auto_increment,
NAME varchar(50) not null,
CAB_NO int,
constraint FK_DriVer_cab_number foreign key
(CAB_NO) references CAB(NO ) on delete set null,
CAB_TYPE varchar(50) not null);

create table BOOKING(
OTP  int primary key auto_increment,
BOOKING_DATE int not null,
TRIP_DATE date,
PICKUP varchar(50),
DESTINATION varchar(50),
TIME time,
CAB_NO int,
constraint FK_bookride_cabtnumber foreign key
(CAB_NO) references CAB(NO ) on delete set null,
CUSTOMER_ID int,
constraint FK_bookride_customerid foreign key
(CUSTOMER_ID) references CUSTOMER(ID ) on delete set null);