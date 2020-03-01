const { Pool } = require("pg");
const fs = require("fs");

const pool = new Pool({
  user: "doadmin",
  host: "db-postgresql-sfo2-19959-do-user-7180989-0.a.db.ondigitalocean.com",
  database: "defaultdb",
  password: "peaxhjtqbzbd71vr",
  port: 25060,
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync("./ca-certificate.txt").toString()
  }
});

//

const db = {
  getUserByEmail: email => {
    return pool.query("SELECT * FROM users WHERE email=$1", [email]);
  },
  getFoodItemsByEmailAndName: (email, foodname) => {
    return pool.query("SELECT * FROM fooditems WHERE email=$1 AND name=$2", [
      email,
      foodname
    ]);
  },
  insertUsers: (fname, lname, email, foodamt, password) => {
    return pool.query(
      "INSERT INTO users VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [fname, lname, email, foodamt, password]
    );
  },
  insertFoodItems: (foodname, foodtype, due_date, email) => {
    return pool.query(
      "INSERT INTO fooditems VALUES ($1, $2, $3, $4) RETURNING *",
      [foodname, foodtype, due_date, email]
    );
  },

  // deleteUsersInFoodItems: email => {
  //   return pool.query("DELETE FROM fooditems WHERE email=$1 RETURNING *", [email]);
  // },
  deleteUsers: email => {
    return pool.query("DELETE FROM users WHERE email=$1 RETURNING *", [email]);
  },
  deleteFoodItems: (email, foodname) => {
    return pool.query(
      "DELETE FROM fooditems WHERE email=$1 AND name=$2 RETURNING *",
      [email, foodname]
    );
  }
};

(async () => {
  const res = await db.getUserByEmail("jmarcelsw@gmail.com");
  console.log("res:", res.rows);

  const itemres = await db.getFoodItemsByEmailAndName(
    "jmarcelsw@gmail.com",
    "Celery"
  );
  console.log("res:", itemres.rows);

  const iusers = await db.insertUsers(
    "jane",
    "doe",
    "janedoe@gmail.com",
    "5",
    "pppp"
  );
  console.log("res:", iusers.rows);

  const ifooditems = await db.insertFoodItems(
    "Carrot",
    "Produce",
    "2020-03-15",
    "janedoe@gmail.com"
  );
  console.log("res:", ifooditems.rows);

  const dusers = await db.deleteUsers("johndoe@gmail.com");
  console.log("res:", dusers.rows);

  const dfooditems = await db.deleteFoodItems("janedoe@gmail.com", "Carrot");
  console.log("res:", dfooditems.rows);

  await pool.end();
})();
