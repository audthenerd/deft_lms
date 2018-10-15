CREATE TABLE IF NOT EXISTS admins (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	username TEXT NOT NULL UNIQUE,
	password CHAR(64) NOT NULL
);


CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	username TEXT NOT NULL UNIQUE,
	level INTEGER NOT NULL,
	password CHAR(64) NOT NULL
);


CREATE TABLE IF NOT EXISTS equipment (
	id SERIAL PRIMARY KEY,
	name TEXT,
	serial_number TEXT NOT NULL,
	operation_manual TEXT,
	latest_maint DATE DEFAULT now(),
	user_id INTEGER
);


CREATE TABLE IF NOT EXISTS editloge (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	equipment_id INTEGER,
	edit_date DATE DEFAULT now()
);


CREATE TABLE IF NOT EXISTS samples (
	id SERIAL PRIMARY KEY,
	name TEXT,
	type TEXT,
	comments TEXT,
	date_logged DATE,
	user_id INTEGER
);


CREATE TABLE IF NOT EXISTS tests (
	id SERIAL PRIMARY KEY,
	name TEXT,
	test_method TEXT,
	test_manual TEXT,
	date_updated DATE DEFAULT now(),
	user_id INTEGER,
	equipment_id INTEGER,
	sample_id INTEGER
);


CREATE TABLE IF NOT EXISTS results (
	id SERIAL PRIMARY KEY,
	result_one INTEGER,
	result_two INTEGER,
	result_three INTEGER,
	test_id INTEGER
);


CREATE TABLE IF NOT EXISTS users_join (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	equipment_id INTEGER,
	samples_id INTEGER,
	tests_id INTEGER
);






