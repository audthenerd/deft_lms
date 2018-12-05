-- INSERT INTO users (name, username, level, password) VALUES('Audrey', 'aud', 1, '123456');
-- INSERT INTO users (name, username, level, password) VALUES('Voldermort', 'voldy', 2, '123456');
-- INSERT INTO users (name, username, level, password) VALUES('Albus', 'adumb', 3, '123456');
-- INSERT INTO users (name, username, level, password) VALUES('Newt', 'newt', 1, '123456');


INSERT INTO samples (name, type, comments, date_logged, user_id) VALUES('QA Pte Ltd', 'h2so4', 'Repeat using ICP-MS', '15-October-2018', 2);
INSERT INTO samples (name, type, comments, date_logged, user_id) VALUES('Medicals Association', 'ch3cooh', 'Condition at 40degC, full test', '15-October-2018', 1);
INSERT INTO samples (name, type, comments, date_logged, user_id) VALUES('Happy Toes', 'h2o2', 'Do at 30degC and 50degC', '16-October-2018', 1);
INSERT INTO samples (name, type, comments, date_logged, user_id) VALUES('MV Corp', 'ch3cooh', 'Condition at 60degC, full test', '16-October-2018', 3);

INSERT INTO equipment (name, serial_number, operation_manual, latest_maint, user_id) VALUES('ICP-MS', 'ICP-299399', 'icp.pdf', '2018-10-15', 1);
INSERT INTO equipment (name, serial_number, operation_manual, latest_maint, user_id) VALUES('AAS', 'AA-12', 'aas.pdf', '2018-10-16', 1);
INSERT INTO equipment (name, serial_number, operation_manual, latest_maint, user_id) VALUES('UV-VIS', 'UV-8772282', 'UV.pdf', '2018-10-16', 1);
INSERT INTO equipment (name, serial_number, operation_manual, latest_maint, user_id) VALUES('FTIR', 'FT-67782', 'ftir.pdf', '2018-10-17', 1);


INSERT INTO tests (name, test_method, test_manual, user_id, equipment_id, sample_id) VALUES('Trace Metals Analysis', 'Determine the amount of trace metals using ICP-MS.', 'absorption.pdf', 1, 1, 1);
INSERT INTO tests (name, test_method, test_manual, user_id, equipment_id, sample_id) VALUES('Water Content', 'Testing the amount of water in soil.', 'water_content.pdf', 1, 2, 2);
INSERT INTO tests (name, test_method, test_manual, user_id, equipment_id, sample_id) VALUES('UV Wavelength', 'Determine the wavelength sample absorbs at.', 'wavelength(uv).pdf', 1, 3, 3);
INSERT INTO tests (name, test_method, test_manual, user_id, equipment_id, sample_id) VALUES('Silicone Content', 'Obtain the amount of silicone with FTIR.', 'silicone_content.pdf', 1, 4, 4);