import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PublicationPanel from "./PublicationPanel";

export default class PublicationTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eighteen: require("../data/publication.json").eighteen,
            seventeen: require("../data/publication.json").seventeen,
            sixteen: require("../data/publication.json").sixteen,
            fifteen: require("../data/publication.json").fifteen,
            fourteen: require("../data/publication.json").fourteen,
            thirteen: require("../data/publication.json").thirteen,
            twelve: require("../data/publication.json").twelve,
            eleven: require("../data/publication.json").eleven,
            ten: require("../data/publication.json").ten,
            nine: require("../data/publication.json").nine,
            eight: require("../data/publication.json").eight,
            seven: require("../data/publication.json").seven,
            six: require("../data/publication.json").six,
            five: require("../data/publication.json").five,
            four: require("../data/publication.json").four
        };
    }
    render() {
        return (
            <Tabs defaultIndex={1}>
                <TabList>
                    <span className="tabYear">Year:</span>
                    <Tab>2018</Tab>
                    <Tab>2017</Tab>
                    <Tab>2016</Tab>
                    <Tab>2015</Tab>
                    <Tab>2014</Tab>
                    <Tab>2013</Tab>
                    <Tab>2012</Tab>
                    <Tab>2011</Tab>
                    <Tab>2010</Tab>
                    <Tab>2009</Tab>
                    <Tab>2008</Tab>
                    <Tab>2007</Tab>
                    <Tab>2006</Tab>
                    <Tab>2005</Tab>
                    <Tab>2004</Tab>
                </TabList>

                <TabPanel>
                    {this.state.eighteen.map(item => (
                        <PublicationPanel key={item.issue} item={item} />
                    ))}
                </TabPanel>
                <TabPanel>
                    {this.state.seventeen.map(item => (
                        <PublicationPanel key={item.issue} item={item} />
                    ))}
                </TabPanel>
                <TabPanel>
                    {this.state.sixteen.map(item => (
                        <PublicationPanel key={item.issue} item={item} />
                    ))}
                </TabPanel>
                <TabPanel>
                    {this.state.fifteen.map(item => (
                        <PublicationPanel key={item.issue} item={item} />
                    ))}
                </TabPanel>
                <TabPanel>
                    {this.state.fourteen.map(item => (
                        <PublicationPanel key={item.issue} item={item} />
                    ))}
                </TabPanel>
                <TabPanel>
                    {this.state.thirteen.map(item => (
                        <PublicationPanel key={item.issue} item={item} />
                    ))}
                </TabPanel>
                <TabPanel>
                    {this.state.twelve.map(item => (
                        <PublicationPanel key={item.issue} item={item} />
                    ))}
                </TabPanel>
                <TabPanel>
                    {this.state.eleven.map(item => (
                        <PublicationPanel key={item.issue} item={item} />
                    ))}
                </TabPanel>
                <TabPanel>
                    {this.state.ten.map(item => (
                        <PublicationPanel key={item.issue} item={item} />
                    ))}
                </TabPanel>
                <TabPanel>
                    {this.state.nine.map(item => (
                        <PublicationPanel key={item.issue} item={item} />
                    ))}
                </TabPanel>
                <TabPanel>
                    {this.state.eight.map(item => (
                        <PublicationPanel key={item.issue} item={item} />
                    ))}
                </TabPanel>
                <TabPanel>
                    {this.state.seven.map(item => (
                        <PublicationPanel key={item.issue} item={item} />
                    ))}
                </TabPanel>
                <TabPanel>
                    {this.state.six.map(item => (
                        <PublicationPanel key={item.issue} item={item} />
                    ))}
                </TabPanel>
                <TabPanel>
                    {this.state.five.map(item => (
                        <PublicationPanel key={item.issue} item={item} />
                    ))}
                </TabPanel>
                <TabPanel>
                    {this.state.four.map(item => (
                        <PublicationPanel key={item.issue} item={item} />
                    ))}
                </TabPanel>
            </Tabs>
        );
    }
}
