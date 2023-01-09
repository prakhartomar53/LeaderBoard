import React, { Component } from 'react'
import logo from './gdsc-logo.png'

export class UserCard extends Component {
  render() {
    return (
        <tr>
        <td className="border-b border-gray-200 bg-darkwhite">
          <p className="items-center font-codefont text-xl font-semibold text-primarydark text-center lg:px-3 lg:py-4 lg:text-lg md:text-base">
            # {this.props.data.Rank}
          </p>
        </td>
        <td className="p-5 border-b border-gray-200 bg-darkwhite w-1/2 lg:px-3 lg:py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 mr-5">
              <img
                className="w-full h-full rounded-full"
                src={logo}
                alt='avatar'
                height={60}
                width={60}
              />
            </div>
            <div>
              <p className="font-codefont text-xl font-medium text-lightblack tracking-wide capitalize lg:text-lg md:text-base">
                {this.props.data.Name}
              </p>
              <p className="font-curlfont text-base font-semibold text-darkgrey">
              {this.props.data.College}
              </p>
            </div>
          </div>
        </td>
        <td className="p-5 border-b border-gray-200 bg-darkwhite text-center lg:px-3 lg:py-4 xs:hidden">
          <span className="font-codefont text-xl font-medium text-lightblack lg:text-base">
            {this.props.data.Points}
          </span>
        </td>
      </tr>
    )
  }
}

export default UserCard