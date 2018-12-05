num = 11
while True:
    num_str = str(num)
    bin_str = format(num, 'b')
    oct_str = format(num, 'o')
    if num_str == num_str[::-1] and bin_str == bin_str[::-1] and oct_str == oct_str[::-1]:
        print(num)
        break
    else:
        num +=2