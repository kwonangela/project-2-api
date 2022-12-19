# GAME OF THRONES API 
(data from: https://thronesapi.com/api/v2/Characters) 

This is an API based off the characters in the popular HBO show, Game of Thrones. 
This API is hosted locally and the entire character list can be accessed by adding "/characters" to the URL. 
To find a specific character, you need to add the individual's ID after the "/characters" (ex: ".../characters/63a0be23ad145d16b7e3434d" for Daenerys Targaryen).
The database includes each character's information, such as name, title, family, and an image. 

# Screenshots
Below are a few screenshots of the locally hosted API, including some with Postman. 

1. What the data looks like on my local host:
<img width="308" alt="Screenshot 2022-12-19 at 3 29 06 PM" src="https://user-images.githubusercontent.com/117434437/208523239-e41a9d73-af33-4df8-bf7d-f205bdbb3f1d.png">

2. When I enter a specific ID in the URL:
<img width="337" alt="Screenshot 2022-12-19 at 3 29 47 PM" src="https://user-images.githubusercontent.com/117434437/208523619-d9fce53e-ae15-4620-b8cd-92b46a48954d.png">

3. Posting a new character in the database using Postman: (fake image url because it takes the image straight from the API website)

<img width="752" alt="Screenshot 2022-12-19 at 3 31 30 PM" src="https://user-images.githubusercontent.com/117434437/208523709-7f8d5d6b-73d3-4f79-a658-fa2bd1afca60.png">

4. Deleting that new character from database using Postman:
<img width="327" alt="Screenshot 2022-12-19 at 3 32 30 PM" src="https://user-images.githubusercontent.com/117434437/208525294-563bba89-2b6e-4770-8e47-d7d0eb62476f.png">

# Technologies Used
JavaScript

# Next Steps
- Add more information to my database (ex: which episodes the characters appeared on, other members of their family, etc.)
- Make each character easier to find through the URL (ex: name and not the generated ID)
