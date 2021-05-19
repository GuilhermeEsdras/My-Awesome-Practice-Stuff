numberOfContacts = int(input())
contactsData = [input().split() for c in range(numberOfContacts)]
phoneBook = {contact: number for contact, number in contactsData}
while True:
    try:
        contactName = input()
        if contactName in phoneBook:
            print(f'{contactName}={phoneBook[contactName]}')
        else:
            print('Not found')
    except:
        break
