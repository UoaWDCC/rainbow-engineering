import type {GlobalConfig} from 'payload'

export const AboutMe: GlobalConfig = {
     slug: 'about-me',
     fields: [
          {
               name: "Title",
               type:"text",
               defaultValue: "About us!",
               required: true,
          },
          {
               name: "Image",
               type: "upload",
               relationTo: "media",
               required: true,
          },
          {
               name: "About Us Description",
               type:"textarea",
               required: true,
          },
          {
               name: "Bullet Points Description",
               type: "textarea",
               required: true,
          },
          {
               name: "Bullet Points",
               type: "array",
               fields: [
                    {
                         name: "Point",
                         type: "text",
                         required: true,
                    }
               ],
               minRows: 1,
               maxRows: 10,
          }
     ]
}