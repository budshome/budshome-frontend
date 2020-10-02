use dotenv::dotenv;
use std::env;

fn main() {
    dotenv().ok();
    
    let bind_addr = env::var("BIND_ADDR")
        .unwrap_or_else(|_| String::from("bind_addr"));

    println!("{}", bind_addr);

    let database_url = env::var("DATABASE_URL")
        .unwrap_or_else(|_| String::from("database_url"));

    println!("{}", database_url);
}
