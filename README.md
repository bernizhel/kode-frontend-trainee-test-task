# KODE Frontend Trainee Test Task

### UX

1. While performing the 2nd step, show the loading monitor 1.0.0
2. Get all the users on loading and save the received data
3. There are two paths:
    1. If there's no error, show the monitor 1.0.0, sorted alphabetically, in Все tab
    2. If there's an error, show the critical error monitor
4. Entering a name or a nickname filters the output on the monitor
5. Clicking a tab filters the users to show ones with the specified position
6. If there are no matched users, show the monitor 2.0.2.Г
7. Clicking the sorting menu opens a tab to choose it from 2 options: alphabetically and by datebirth. Clicking on one of them closes the tab and outputs the users respectively
8. Clicking on a user outputs a component with his information (avatar, name, nickname, phone number, datebirth)

---

### Development

1. Set up the project 1h
2. Create the largest input block and place the header element, the search block and the tabs block into the one 1h
3. Lay out the search block 1h
4. Lay out the tabs block 1h
5. Create the output block and place the placeholder block into it 1h
6. Lay out the placeholder block 1h
7. Lay out the critical error block 1h
8. Work with the API: make the page to send the inital request to get all the users (then save them at the redux store) or an error 1h
9. Output the result by clearing the placeholder blocks or by showing the critical error block 15m
10. Make the critical error block work by clicking the Попробовать снова button 15m
11. Create the user info block 30m
12. Make the search block to work: make the output block show only the matched user blocks or the search error block 2h
13. Lay out the search error block 1h
14. Make the tabs to work: clicking on one of them filters the output block to show only the matched user blocks 1h
15. Lay out the sort block 1h
16. Make the sort block to popup on clicking the search block button and to close on clicking one of the given options 1h
17. Make the output block to look correspondingly to the chosen sorting option, that is, change the output block and the user block respectively 1h
18. Allow clicking a user trigger opening the detailed user block and place the upper block, the info block and the contacts block with its phone and datebirth blocks inside 2h
19. Lay out the upper block and implement the system back button and the block's inner block, the button, to close the detailed user block 2h
20. Lay out the info block 30m
21. Lay out the phone number block and implement its functionality 1h
22. Lay out the datebirth block 1h

---

### Real Time

1. Decompose the application into blocks: 1h
2. Draw up a plan on how to use react, redux, axios, react-router to create the blocks: 2h
3. Setting up the project: 4h
4. Lay out the input and output blocks (without functionality): 12h
5. Create the initial redux configuration: 3h
6. Make the output block to show placeholders, users, criticl error or not found error on demand: 2h
7. Lay out the user block's summary state and the output block to filter the users: 2h
8. Implement the search input functionality: 2h
9. Implement the tab input functionaity: 3h
10. Make the sort feature to work and lay out the SortInput block: 4h
11. Create the detailed view of the UserBlock: 4h
12. Configure the react-router-dom to the application in order to close the detailed view of the UserBlock on clicking the browser back button: 3h
13. Make the phone number a link to open the calling application: 0.5h
