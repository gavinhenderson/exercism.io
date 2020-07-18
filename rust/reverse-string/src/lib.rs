pub fn reverse(input: &str) -> String {
    let split_input = input.chars();
    let reversed_chars = split_input.rev();
    let full_return = reversed_chars.collect();

    return full_return;
}
