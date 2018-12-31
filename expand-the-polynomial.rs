fn coefficients(first: i32) -> [i32; 10] {
    return [first, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

fn main() {
    let mut poly = String::new();
    std::io::stdin().read_line(&mut poly);
    let mut equations: Vec<String> = Vec::new();
    let mut temp = String::new();
    
    for c in poly.chars() { 
        if c != '('  && c != ')' && c != '*' {
            temp = temp + &c.to_string();
            if temp == "^" {
                let copy = equations.last().unwrap().clone();
                equations.push(copy);
            }
        }else{
            if temp.len() > 0 { 
                equations.push(temp);
            }
            temp = String::new();
        }
    }
   
    let mut answers = coefficients(1);
    for i in 0..equations.len() {
        let mut holder = coefficients(0);
        let mut sign:i32 = 1;
        let mut number:i32 = 0;
        let mut power:usize = 0;
        let mut isPower = false;
        
        for (j, c) in equations[i].chars().enumerate(){
            if c.is_numeric() {
                if isPower == true {
                    power = c as usize - 48;
                    isPower = false;
                } else {
                    number = (c as i32 - 48) * sign;
                }
            }else if c == 'x' {
                power = 1;
                number = if number == 0 { sign} else {number};
            }else if c == '^' {
                isPower = true;
            }
            
            if c == '+' || c == '-' || j == equations[i].len() - 1 {
                sign = if c == '-' {-1} else {1};
                holder[power] = number;
                number = 0;
                power = 0;
            }
        }
        
        let mut temp = coefficients(0);
        for (m, v) in holder.iter().enumerate() {
            for (n, vv) in answers.iter().enumerate() {
                if *v != 0 && *vv != 0 {
                    temp[m + n] += v * vv;
                }
            }
        }
        answers = temp;
    }
    
    let mut printed = false;
    for i in 0..answers.len() {
        let power = answers.len() - i - 1;
        let value = answers[power];
        let alphabet = if power > 1 { "x^".to_string() + &power.to_string()} else { if power > 0 {"x".to_string()} else {"".to_string()} };
        let sign = if value > 0 { if printed { "+"} else {""} } else { "-" };
        let number = if power == 0 || value.abs() != 1 { value.abs().to_string() } else { "".to_string() };
        if value != 0 {
            print!("{}{}{}", sign, number, alphabet);
            printed = true;
        }
    }
}
