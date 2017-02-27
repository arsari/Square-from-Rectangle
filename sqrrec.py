#   encoding declaration
"""coding=utf-8"""


#   area function definition
def getArea(userLength, userHeight):
    return userLength * userHeight


#   perimeter function definition
def getPerimeter(userLength, userHeight):
    return (userLength + userHeight) * 2


#   draw function definition
def draw(userLength, userHeight):
    tbl = '##' * userLength
    ml = '  ' * (userLength - 1)
    i = 0
    print(tbl)
    while i < (userHeight - 2):
        print(tbl[0] + ml + tbl[-1])
        i += 1
    print(tbl)
    return ''


#   input loop
while True:
    #   introduction
    print('==========================================================')
    print('This app will draw and calculate the area and perimeter\nof a rectangle and them will draw and calculate the area\nand perimeter of a square using on the following inputs...\n(For exit, enter 0 in any of the inputs.)')
    print('----------------------------------------------------------')
    #   user input prompt
    try:
        userLength = int(input('Enter a LENGTH value for the Rectangle: '))
        userHeight = int(input('Enter a HEIGHT value for the Rectangle: '))
    except Exception:
        print('\n*** INPUT ERROR ***\nInput value of Length and Height should not be empty.\n')
        continue
    print('==========================================================\n')

    #   user input evaluation
    if userLength == 0 or userHeight == 0:
        print('################')
        print('# Thank You!!! #')
        print('################\n')
        break
    elif userLength < 3 or userHeight < 3:
        print('*** INPUT ERROR ***\nInput value of Length and Height should not be less than 3 units.\n')
    else:
        #   rectangle outputs
        draw(userLength, userHeight)
        print('\nRectangle total area is ' + str(getArea(userLength, userHeight)) + ' sq. units.')
        print('Rectangle perimeter length is ' + str(getPerimeter(userLength, userHeight)) + ' units.\n')

        #   determine square sides length
        sqrSide = int(getPerimeter(userLength, userHeight) / 4)

        #   square outputs
        draw(sqrSide, sqrSide)
        print('\nSquare total area is ' + str(getArea(sqrSide, sqrSide)) + ' sq. units.')
        print('Square perimeter length is ' + str(getPerimeter(sqrSide, sqrSide)) + ' units.\n')
        break
