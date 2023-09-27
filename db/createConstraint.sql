BEGIN;


CREATE TABLE IF NOT EXISTS public.customer
(
    customer_id bigint NOT NULL,
    user_id bigint NOT NULL,
    new_customer_ind character(1) COLLATE pg_catalog."default" NOT NULL DEFAULT 'N'::bpchar,
    CONSTRAINT customer_pkey PRIMARY KEY (customer_id)
);

CREATE TABLE IF NOT EXISTS public.invoice
(
    invoice_id bigint NOT NULL,
    order_id bigint NOT NULL,
    invoice_date date NOT NULL,
    invoice_status character(10) COLLATE pg_catalog."default" NOT NULL DEFAULT 'UNPAID'::bpchar,
    CONSTRAINT invoice_pkey PRIMARY KEY (invoice_id)
);

CREATE TABLE IF NOT EXISTS public."order"
(
    order_id bigint NOT NULL,
    customer_id bigint NOT NULL,
    defunct_ind character(1) COLLATE pg_catalog."default" NOT NULL DEFAULT 'N'::bpchar,
    CONSTRAINT order_pkey PRIMARY KEY (order_id)
);

CREATE TABLE IF NOT EXISTS public.order_item
(
    order_item_id bigint NOT NULL,
    product_id bigint NOT NULL,
    order_id bigint NOT NULL,
    order_qty numeric NOT NULL DEFAULT 0,
    defunct_ind character(1) COLLATE pg_catalog."default" NOT NULL DEFAULT 'N'::bpchar,
    CONSTRAINT order_item_pkey PRIMARY KEY (order_item_id)
);

CREATE TABLE IF NOT EXISTS public.payment
(
    payment_id bigint NOT NULL,
    invoice_id bigint NOT NULL,
    payment_amount numeric NOT NULL DEFAULT 0,
    CONSTRAINT payment_pkey PRIMARY KEY (payment_id)
);

CREATE TABLE IF NOT EXISTS public.product
(
    product_id bigint NOT NULL,
    product_name character(50) COLLATE pg_catalog."default" NOT NULL,
    color character(25) COLLATE pg_catalog."default" NOT NULL,
    qty numeric NOT NULL DEFAULT 0,
    price numeric NOT NULL DEFAULT 0,
    CONSTRAINT product_pkey PRIMARY KEY (product_id)
);

CREATE TABLE IF NOT EXISTS public."user"
(
    user_id bigint NOT NULL,
    name character(50) COLLATE pg_catalog."default" NOT NULL,
    birthdate date NOT NULL,
    email character(50) COLLATE pg_catalog."default" NOT NULL,
    password character(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (user_id)
);

ALTER TABLE IF EXISTS public.customer
    ADD CONSTRAINT customer_user_fkey FOREIGN KEY (user_id)
    REFERENCES public."user" (user_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.invoice
    ADD CONSTRAINT invoice_order_fkey FOREIGN KEY (order_id)
    REFERENCES public."order" (order_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."order"
    ADD CONSTRAINT order_customer_fkey FOREIGN KEY (customer_id)
    REFERENCES public.customer (customer_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.order_item
    ADD CONSTRAINT order_item_product_fkey FOREIGN KEY (product_id)
    REFERENCES public.product (product_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.order_item
    ADD CONSTRAINT order_item_order_fkey FOREIGN KEY (order_id)
    REFERENCES public."order" (order_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.payment
    ADD CONSTRAINT payment_invoice_fkey FOREIGN KEY (invoice_id)
    REFERENCES public.invoice (invoice_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;