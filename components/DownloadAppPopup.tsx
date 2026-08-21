import React, { useState } from 'react';
import Image from 'next/image';
import QrImg from "../public/brilliant_memory_computers_google_play_qr.png";

const DownloadAppPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            style={{
                position: 'fixed',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* Toggle Arrow Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close app QR panel' : 'Open app QR panel'}
                style={{
                    width: '36px',
                    height: '80px',
                    background: '#1a1a2e',
                    border: 'none',
                    borderRadius: '10px 0 0 10px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    boxShadow: '-4px 2px 14px rgba(0,0,0,0.35)',
                    flexShrink: 0,
                    transition: 'background 0.2s',
                    zIndex: 2,
                    position: 'relative',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#0f3460')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1a1a2e')}
            >
                {isOpen ? (
                    /* Close arrow → pointing right (chevron-right) */
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                ) : (
                    /* Closed state → "APP QR" vertical + left arrow */
                    <>
                        <span
                            style={{
                                color: 'white',
                                fontSize: '8px',
                                fontWeight: '800',
                                letterSpacing: '0.5px',
                                writingMode: 'vertical-rl',
                                textOrientation: 'mixed',
                                transform: 'rotate(180deg)',
                                lineHeight: 1,
                                fontFamily: 'Inter, sans-serif',
                            }}
                        >
                            APP QR
                        </span>
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </>
                )}
            </button>

            {/* QR Panel - slides in/out */}
            <div
                style={{
                    width: '190px',
                    overflow: 'hidden',
                    maxWidth: isOpen ? '190px' : '0px',
                    transition: 'max-width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <a
                    href="https://play.google.com/store/apps/details?id=in.brilliantmemorycomputers.app&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        width: '190px',
                        background: '#ffffff',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '18px 14px 14px',
                        gap: '10px',
                        textDecoration: 'none',
                    }}
                >
                    <Image
                        src={QrImg}
                        alt="Scan to Download BMC App"
                        width={155}
                        height={155}
                        style={{
                            width: '155px',
                            height: '155px',
                            objectFit: 'contain',
                            display: 'block',
                        }}
                        priority
                    />
                    <span
                        style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            color: '#1a1a2e',
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase',
                            fontFamily: 'Inter, sans-serif',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        DOWNLOAD APP
                    </span>
                </a>
            </div>
        </div>
    );
};

export default DownloadAppPopup;
