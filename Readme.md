## Instructions to run

* Pull latest changes from Github.
* In terminal, run:
```
npm install
```
* After waiting for any new dependencies to download, run:
```
npm run start
```
* In your browser, navigate to http://localhost:8080

TODO:
* Fix small 1px error in widths on grid.


Dumb Components: Aka Presentational, Stateless,  ex Page, Sidebar, Story, UserInfo, List. data from props 


Smart Components: Container Components, containers  no DOM markup, no styles usually. [how things work]- usually geneerated by redux and connect(container) things like UserPage, FollowersSidebar, StoryContainer, FollowedUserList.