# encoding declaration
"""coding=utf-8"""
from colorama import Fore, Back, Style


# area function definition
def getArea(userLength, userHeight):
    return userLength * userHeight


# perimeter function definition
def getPerimeter(userLength, userHeight):
    return (userLength + userHeight) * 2


# draw function definition
def draw(userLength, userHeight):
    tbRow = '  ' * userLength
    mRow = '  ' * (userLength - 1)
    i = 0
    if userLength == userHeight:
        print(Back.GREEN + tbRow + Back.RESET)
        while i < (userHeight - 2):
            print(Back.GREEN + tbRow[0] + Back.RESET + mRow + Back.GREEN + tbRow[-1] + Back.RESET)
            i += 1
        print(Back.GREEN + tbRow + Back.RESET)
    else:
        print(Back.CYAN + tbRow + Back.RESET)
        while i < (userHeight - 2):
            print(Back.CYAN + tbRow[0] + Back.RESET + mRow + Back.CYAN + tbRow[-1] + Back.RESET)
            i += 1
        print(Back.CYAN + tbRow + Back.RESET)
    return ''


# input loop
while True:
    # script description
    print(Fore.RED + '\n==============================================' + Fore.YELLOW + 'v1.3.170304' + Fore.RESET)
    print(Fore.CYAN + 'This script will draw and calculate the area and perimeter\nof a rectangle and them will draw and calculate the area\nand perimeter of a square using on the following inputs...\n(For exit, enter 0 in any of the inputs.)' + Fore.RESET)
    print(Fore.BLUE + '----------------------------------------------------------' + Fore.RESET)
    # user input prompt and evaluation
    try:
        userLength = int(input(Fore.YELLOW + 'Enter a LENGTH value for the Rectangle: ' + Fore.RESET))
        userHeight = int(input(Fore.YELLOW + 'Enter a HEIGHT value for the Rectangle: ' + Fore.RESET))
    except Exception:
        print('\n' + Back.RED + '*** INPUT ERROR ***' + Back.RESET + '\n' + Back.RED + 'Input value of Length and Height should be a Number.' + Back.RESET)
        continue
    print(Fore.RED + '==========================================================\n' + Fore.RESET)

    # user input evaluation
    if userLength == 0 or userHeight == 0:
        print(Back.MAGENTA + '-----------------' + Back.RESET)
        print(Back.MAGENTA + '|' + Back.RESET + '  Good Bye!!!  ' + Back.MAGENTA + '|' + Back.RESET)
        print(Back.MAGENTA + '-----------------' + Back.RESET + '\n')
        break
    elif userLength < 3 or userHeight < 3:
        print(Back.RED + '*** INPUT ERROR ***' + Back.RESET + '\n' + Back.RED + 'Input value of Length and Height should not be less than 3 units.' + Back.RESET)
    else:
        # rectangle outputs
        draw(userLength, userHeight)
        print('\n' + Style.BRIGHT + Fore.YELLOW + 'Rectangle total area is ' + str(getArea(userLength, userHeight)) + ' sq. units.')
        print('Rectangle perimeter length is ' + str(getPerimeter(userLength, userHeight)) + ' units.\n')

        # determine square sides length
        sqrSide = int(getPerimeter(userLength, userHeight) / 4)

        # square outputs
        draw(sqrSide, sqrSide)
        print('\nSquare total area is ' + str(getArea(sqrSide, sqrSide)) + ' sq. units.')
        print('Square perimeter length is ' + str(getPerimeter(sqrSide, sqrSide)) + ' units.\n')
        break
