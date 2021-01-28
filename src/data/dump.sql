CREATE TABLE IF NOT EXISTS suspects(
	`id` INTEGER PRIMARY KEY AUTOINCREMENT,
	`name` TEXT,
	`gender` TEXT,
	`address` TEXT,
	`nik` TEXT,
	`no_kk` TEXT,
	`mo` TEXT,
	`riwayat` TEXT,
	`photo` TEXT,
	`res_id` INTEGER,
	`wlyh_id` INTEGER
);

INSERT or IGNORE INTO suspects('id', 'name', 'gender', 'address', 'nik', 'no_kk', 'mo', 'riwayat', 'photo', 'res_id', 'wlyh_id')
 VALUES (1, 'Tandang Setiabudi', 'Laki=laki', 'Kebumen, Jl. kebun sawit', '2252312421425', '225353115355351', 'Terencana', 'dipenjara seumur hidup', '/img/suspects/1.jpg', '1', 
 '1');