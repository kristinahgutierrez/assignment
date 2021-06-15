import React, { Component } from "react";
import { Router, Switch, Route, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import TransactionDetails from "../pages/transactions/TransactionDetails";
import { Table, Layout, Card } from "antd";
const { Content } = Layout;
const history = createBrowserHistory();

function ChildData() {
    let location = useLocation();
    let data = location.state === undefined ? [] : location.state.nestedRecord;
        const columns = [
            {
              title: "ID",
              dataIndex: "id",
              defaultSortOrder: 'ascend',
              sorter: (a, b) => a.id - b.id,
            },
            {
              title: "Sender",
              render: () => <span>{data.sender}</span>
            },
            {
              title: "Receiver",
              render: () => <span>{data.receiver}</span>
            },
            {
              title: "Total Amount",
              render: () => <span>{data.totalAmount}</span>
            },
            {
              title: "Paid Amount",
              dataIndex: "paidAmount",
            },
        ];
    return (
        <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Layout>
            <Content className="contentBody">
            <Card title="Child" key={0}>
                <Table
                    columns={columns}
                    dataSource={data.child}
                    pagination={{ defaultPageSize: 2}}
                    showHeader={true}
                    rowKey={record => record.id}
                />
            </Card>
            </Content>
        </Layout>
        </Layout>
        </div>
    );
}

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={TransactionDetails} />
                    <Route path="/child-details" component={ChildData} />
                </Switch>
            </Router>
        )
    }
}