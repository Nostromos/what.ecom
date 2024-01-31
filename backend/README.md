# what.ecom Backend

## Summary
Node, Postgres, and Express backend with S3 for images and videos. `node-postgres` (aka `pg`) to interface with the datastore. 

### Hosting
Unsure but [Render](https://render.com) is pretty generous with their free tier and there's a lot of tooling provided to simplify deployment. As this grows, I'll reconsider.

I'm trying to work more with AWS so S3 seems like a good place to start for videos and images. I'll likely explore other products to see what I can use.

### Datastores
Postgres is the GOAT so I'll stick with that for whatever I can. 

### Authn/Authz
Passport.js seems to comprehensively address all of the stuff I think I need for this project but we'll see. Once I get to MVP, I can have a mentor review and advise on how to make this more "professional".