export const listManagerSettings = {
    styles: {
        container: {
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        addForm: {
            inputText: {
                marginLeft: 5,
                marginRight: 5,
                padding: 5,
            },
            inputSubmit: {
                padding: 5
            }
        },
        ulList: {
            listStyle: 'none',
            paddingLeft: 0,
            lis: {
                marginBottom: 20,
                border: '1px solid grey',
                padding: 20,
                itemName: {
                    color: 'grey',
                    fontStyle: 'italic',
                    fontSize: 20,
                    marginBottom: 15
                },
                controls: {
                    float: 'right',
                    btns: {
                        marginLeft: 10
                    }
                }
            }
        }
    },
    listDefinitions: {
        listName: 'Current USAA Services',
        itemLabel: 'Add a Service',
        itemInputPlaceholder: 'Savings Booster, Paycheck Planner, etc.',
        itemSubmitLabel: 'Add Service',
        controls: {
            toggleControlLabel: 'Edit',
            deleteControlLabel: 'Remove'
        }
    }
};