  import a5_0x22f22a from 'sqlite3';
  import { open } from 'sqlite';
  class SQLITE {
    async ['connectToDatabase']() {
      return open({
        'filename': "./database.db",
        'driver': a5_0x22f22a.Database
      });
    }
    async ['createTable']() {
      const _0x149475 = await this.connectToDatabase();
      await _0x149475.exec("\n      CREATE TABLE IF NOT EXISTS session (\n        id INTEGER PRIMARY KEY AUTOINCREMENT,\n        address TEXT NOT NULL,\n        part TEXT NOT NULL,\n        permit TEXT NOT NULL,\n        created_at DATE NOT NULL\n      )\n    ");
      await _0x149475.close();
    }
    async ['insertData'](_0x58cf92, _0x2366bc, _0x46dcd2, _0x2430b5) {
      const _0x38423b = await this.connectToDatabase();
      await _0x38423b.run("INSERT INTO session (address, created_at, part, permit) VALUES (?, ?, ?, ?)", [_0x58cf92, _0x2366bc, _0x46dcd2, _0x2430b5]);
      await _0x38423b.close();
    }
    async ["getLatestSession"](_0x443bd4) {
      const _0x20e6b8 = await this.connectToDatabase();
      const _0x1ac4f2 = await _0x20e6b8.all("\n      SELECT * FROM session\n      WHERE address = ?\n      ORDER BY created_at DESC\n    ", [_0x443bd4]);
      await _0x20e6b8.close();
      return _0x1ac4f2;
    }
  }
  const sqlite = new SQLITE();
  await sqlite.createTable();
  export default sqlite;