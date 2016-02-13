Forms = new Mongo.Collection('forms');


if (Meteor.isServer) {
    Forms.allow({
        insert: function (userId, doc) {
            return true;
        },

        update: function (userId, doc, fieldNames, modifier) {
            return true;
        },

        remove: function (userId, doc) {
            return true;
        }
    });
}

FormSchema = new SimpleSchema({
    formName: {
        type: String,
        label: "Form Name",
        max: 100
    },
    description: {
        type: String,
        label: "Description",
        autoform: {
            afFieldInput: {
                type: "ace-editor"
            }
        },
        formJson: {
            type: String,
            label: "Form Definition"
        },
        author: {
            type: String,
            label: "Author",
            max: 75
        },
        createdAt: {
            type: Date
        },
        lastModified: {
            type: Date
        }
    });

Forms.attachSchema(FormSchema);
