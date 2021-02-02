import styled from 'styled-components';

export const styleCss = {
    Main : styled.div`
    color: #676D8D;
    font-family: Arial, Helvetica, sans-serif;
    min-width: 400px;
        .title {
            text-align: center;
        }
        .cards-div {
            // CSS Grid Layout to create a layout that has as many columns of at least 480 pixels as will fit, distributing the extra space between all columns
            display: grid;
            grid-template-columns: repeat(auto-fill,minmax(480px, 1fr));
        }
    `,
    Card : styled.div`
    margin: 10px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 4px #888888;
    height: 300px;
    position: relative;
            .charity-img {
                width:100%;
                height: 220px;
            }
            .donate-section {
                margin: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
    `,
    PaymentFormDiv :styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: #FFF;
    opacity: 0.8;
        &form{
            margin:auto;
        }
        .paymentButton {
            margin: 15px;
        }

        .close {
            cursor: pointer;
            position: absolute;
            padding: 12px 16px;
            right: 0%;
            font-size: 20px
            }
        .payment-section {
            left: calc(50% - 114px);
            position: absolute;
            top: 0;
            transform: translate(0, 50%);
            text-align: center;
        }

    `,
    Button: styled.button`
    cursor: pointer;
    background-color: white;
    color: #6889FC;
    border: 1px solid #6889FC;
    height: 30px;
    border-radius: 3px;
        &:focus {
            outline: none;
            box-shadow: none;
          }
    `,
}