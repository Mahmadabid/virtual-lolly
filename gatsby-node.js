const path = require("path");
const faunadb = require("faunadb");
const q = faunadb.query;

require("dotenv").config();
// var client = new faunadb.Client({
//     secret: process.env.FAUNADB_SECRET,
//   });
//   async function test(){
//     const result = await client.query(
//         q.Get(q.Ref(q.Collection('lolly'), "298774386378277389"))
//       );
//       console.log(result);
//   }
// const result = await client.query(
//     q.Map(
//       q.Paginate(q.Match(q.Index("lollies"))),
//       q.Lambda((x) => q.Get(x))
//     )
//   );
//   result.data.forEach((lolly) => {
//     console.log(lolly.data.c1);
//   })
//     }
//   test();


exports.createPages = async ({ graphql, actions }) => {

  const LollyTemplate = require.resolve(`./src/components/LollyTemplate.tsx`);

    try {
        var client = new faunadb.Client({
            secret: process.env.FAUNADB_SECRET,
          });
          const result = await client.query(
            q.Map(
              q.Paginate(q.Match(q.Index("lollies"))),
              q.Lambda((x) => q.Get(x))
            )
          );
            
          result.data.forEach((lolly) => {
            actions.createPage({
              path: `/${lolly.data.lollyPath}`,
              component: LollyTemplate,
              context: {
                c1: lolly.data.c1,
                c2: lolly.data.c2,
                c3: lolly.data.c3,
                msg: lolly.data.msg,
                sender: lolly.data.sender,
                receiver: lolly.data.c1,
                lollyPath: lolly.data.lollyPath,
              },
            });
          });
        }
    catch(error) {
        console.log('node', error);
    }
}

exports.onCreatePage = async ({page, actions}) => {
  const {createPage} =  actions

  if(page.path.match(/^\/viewlolly/)){
      page.matchPath = "/viewlolly/*"

      createPage(page)

  }

}