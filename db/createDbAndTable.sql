CREATE DATABASE clo_db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE public."user"
(
    user_id bigint NOT NULL,
    name character(50) NOT NULL,
    birthdate date NOT NULL,
    email character(50) NOT NULL,
    password character(50) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE public.customer
(
    customer_id bigint NOT NULL,
    user_id bigint NOT NULL,
    new_customer_ind character(1) NOT NULL DEFAULT 'N',
    PRIMARY KEY (customer_id)
);

CREATE TABLE public.product
(
    product_id bigint NOT NULL,
    product_name character(50) NOT NULL,
    color character(25) NOT NULL,
    qty numeric NOT NULL DEFAULT 0,
    price numeric NOT NULL DEFAULT 0,
    PRIMARY KEY (product_id)
);

CREATE TABLE public."order"
(
    order_id bigint NOT NULL,
    customer_id bigint NOT NULL,
    defunct_ind character(1) NOT NULL DEFAULT 'N',
    PRIMARY KEY (order_id)
);

CREATE TABLE public.invoice
(
    invoice_id bigint NOT NULL,
    order_id bigint NOT NULL,
    invoice_date date NOT NULL,
    invoice_status character(10) NOT NULL DEFAULT 'UNPAID',
    PRIMARY KEY (invoice_id)
);

CREATE TABLE public.payment
(
    payment_id bigint NOT NULL,
    invoice_id bigint NOT NULL,
    payment_amount numeric NOT NULL DEFAULT 0,
    PRIMARY KEY (payment_id)
);

CREATE TABLE public.order_item
(
    order_item_id bigint NOT NULL,
    product_id bigint NOT NULL,
    order_id bigint NOT NULL,
    order_qty numeric NOT NULL DEFAULT 0,
    defunct_ind character(1) NOT NULL DEFAULT 'N',
    PRIMARY KEY (order_item_id)
);