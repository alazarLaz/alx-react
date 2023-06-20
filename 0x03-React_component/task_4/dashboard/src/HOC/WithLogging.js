import React from 'react'

const WithLogging = ({WrappedComponent}) => {
    const getDisplayName = (WrappedComponent)=> WrappedComponent.displayName || "Component"
  return class extends React.Component{
    componentDidMount(){
        console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`)
    }
    componentWillUnmount(){
        console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`)
    }
    render(){
        return <WrappedComponent {...this.props} />
    }
  }
}

export default WithLogging;