import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { LinearProgress } from '@mui/material';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Schedule() {


    return (
        <div style={{ marginTop: "20vh", marginLeft: "5vw", width: "25vw" }}>

            <Card style={{height:"40vh"}} className="flex flex-col shadow">
                <CardContent className="flex flex-col flex-auto p-24">
                    <div className="w-full">
                        <div className="flex items-center justify-between mb-16">
                            <Chip
                                className="font-semibold text-12"
                                label="Web"
                                sx={{
                                    color: "grey"
                                }}
                                size="small"
                            />
                        </div>

                        <Typography className="text-16 font-medium">React MUI</Typography>

                        <Typography className="text-13 mt-2 line-clamp-2" color="text.secondary">
                            How Are you?
                        </Typography>
                        <Divider className="w-48 my-24 border-1" light />
                        <Typography className="text-16 font-medium">React MUI</Typography>

                        <Typography className="text-13 mt-2 line-clamp-2" color="text.secondary">
                            How Are you?
                        </Typography>
                        <Divider className="w-48 my-24 border-1" light />
                        <Typography className="text-16 font-medium">React MUI</Typography>

                        <Typography className="text-13 mt-2 line-clamp-2" color="text.secondary">
                            How Are you?
                        </Typography>
                        <Divider className="w-48 my-24 border-1" light />
                        <Typography className="text-16 font-medium">React MUI</Typography>

                        <Typography className="text-13 mt-2 line-clamp-2" color="text.secondary">
                            How Are you?
                        </Typography>
                        <Divider className="w-48 my-24 border-1" light />
                        <Typography className="text-16 font-medium">React MUI</Typography>

                        <Typography className="text-13 mt-2 line-clamp-2" color="text.secondary">
                            How Are you?
                        </Typography>
                        <Divider className="w-48 my-24 border-1" light />
                    </div>
                </CardContent>
                <LinearProgress
                    style={{height:"0.3vh"}}
                    variant="determinate"
                    value="100"
                    color="primary"
                />
                <CardActions
                    className="items-center justify-end py-16 px-24"
                    sx={{ backgroundColor: "white" }}
                >
                    <Button
                        className="px-16 min-w-128"
                        color="primary"
                        variant="contained"
                    >
                        Continue
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

