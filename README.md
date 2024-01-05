## Getting Started

1. Clone this repository
2. Run `npm install` in the root directory (and other directory as well [web, frontend])
3. Run `npm run dev` to start the app and follow the below steps:-
   
    i.We need to authenticate partner account through cli and select  the partner account, so select `Galaxy weblinks Inc` account  [For which partner organization..?] 
    
    ii.No, connect it as an existing app `TInytags - Design and option`  [For which existing app is this for ?]
    
    iii.Select `Tinytags Design Tool` store [which store would you like to use to view  this project?]

5. We need to select the partner account
6. Select the existing app option and select the "tinytags-design-tool"
7. It will return the preview URL that will open the app on the store

## Additional configuration
1.Install Shopify CLI using command.

  npm install -g @shopify/cli @shopify/theme

  sudo snap install ruby --classic

2. Create a database with name `tinytags_design_and_option` in mysql and update the path url in mysqlsessionstorage object(Path: web/shopify.js).[ex:- 'mysql://username:password@host/database_name']

