import React from 'react';
import { Tooltip } from 'antd';
import {
    TwitterOutlined, InstagramOutlined, WhatsAppOutlined,
    MailOutlined,
} from '@ant-design/icons';

const FooterHome = () => {
    return (
        <div className="flex">
            <div className="footer bg-blue-100 py-10 w-full flex">
                <div className="ml-12">
                    <h2><b>PT KUSNANDI BERKUTUT</b></h2>
                    <p>Alamat : Cangkuang Rt 1 Rw 12</p>
                    <p>Alamat : Cangkuang Rt 1 Rw 12</p>
                    <p>Alamat : Cangkuang Rt 1 Rw 12</p>
                </div>
                <div className="ml-12">
                    <h2><b>Media sosial</b></h2>
                    <div className="flex">
                        {/* Twitter */}
                        <Tooltip title="Twitter">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <TwitterOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
                            </a>
                        </Tooltip>
                        {/* Instagram */}
                        <Tooltip title="Instagram">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <InstagramOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
                            </a>
                        </Tooltip>
                        {/* WhatsApp */}
                        <Tooltip title="WhatsApp">
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                                <WhatsAppOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
                            </a>
                        </Tooltip>
                        {/* Email */}
                        <Tooltip title="Email">
                            <a href="mailto:example@example.com">
                                <MailOutlined style={{ fontSize: '24px' }} />
                            </a>
                        </Tooltip>
                    </div>
                </div>
                <div>
                    <h2><b></b></h2>
                </div>
                <div className="bg-slate-300 w-1/4 ml-96"></div>
                <br />
                <div className='flex'>
                </div>
            </div>
        </div>
    );
}

export default FooterHome;
