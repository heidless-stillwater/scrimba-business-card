import React from "react"
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import MailIcon from '@material-ui/icons/MailOutline'

export default function Info() {
    return (
      <div className="info">
          <div className="info--header">
              heidless 2
          </div>
          <div className="info--role">
              Frontend Developer
          </div>
          <div className="info--emailAddress">
            <MailIcon></MailIcon>
            test@test.com
          </div>
          <div className="info--buttons">
            <ButtonGroup  variant="contained">
              <Button onClick={() => {
                  alert('mail clicked');
                }}>
                <MailIcon></MailIcon>
                Mail
              </Button>
              <Button color="primary" onClick={() => {
                  alert('linkedin clicked');
                }}>
                linkedin Button
              </Button>
            </ButtonGroup>
          </div>
      </div>
    )
}