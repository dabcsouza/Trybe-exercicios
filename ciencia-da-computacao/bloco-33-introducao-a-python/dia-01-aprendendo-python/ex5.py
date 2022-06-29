def calculate_print_data(square_meters):
    if(square_meters % ( 3 * 18) != 0):
        n_cans = (square_meters // (3 * 18)) + 1;
        total = n_cans * 80;
        return (n_cans, total)
    else:
        return (square_meters // (3 * 18), (square_meters // (3 * 18)) * 80)

print(calculate_print_data(300))
