import datetime
#declare the dictonary
inventory={}
#take input for price and item
for i in range(1,6):

    #take user input
    print("Please enter item",i,":")
    s=input()
    print("Please enter the price of item",i,":")
    p=float(input())
    #store values into dictonary
    inventory[i-1]=s
    #set value to key
    inventory[s]=p

#print welcome message
print("\nWelcome to Ace HardWare!\n")
#declare empty list
name_l=[]
quan_l=[]
#take value from user
for i in range(3):
    #take values
    name=input("What is the first item you would like to purchase?\n")
    quan=int(input("How many would you like to purchase?\n"))
    #add into list
    name_l.append(name)
    quan_l.append(quan)
#print time#
print("\nThanks for shopping at Ace HardWare!\n")
x = datetime.datetime.now()
print(x,'\n')
#print receipt
for i in range(3):
    print(quan_l[i],' ',name_l[i],'(s) @',"{0:.2f}".format(inventory[name]),' = $',"{0:.2f}".format(quan_l[i]*inventory[name]),sep='')

